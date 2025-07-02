// script.js (ランダム表示 + Web Speech API対応版)

// data.js で定義された flashcardsData を使用します。
// （このファイルでは flashcardsData は宣言せず、data.js で宣言されたものを使用します）

let flashcardsShuffled = []; // シャッフルされたデータを格納する新しい配列
let currentCardIndex = 0;

// DOM要素の取得
const questionImage = document.getElementById('question-image');
const answerText = document.getElementById('answer-text');
// const playAudioBtn = document.getElementById('play-audio-btn'); // 発音ボタン -> 削除またはコメントアウト
const showAnswerBtn = document.getElementById('show-answer-btn');
const nextBtn = document.getElementById('next-btn');

// Web Speech API の準備
const synth = window.speechSynthesis;
let voices = [];

// 利用可能な音声（ボイス）をロード
function populateVoiceList() {
    voices = synth.getVoices().sort((a, b) => a.name.localeCompare(b.name));
    // console.log("利用可能なボイス:", voices); // デバッグ用に利用可能なボイスを表示
}

// voiceschanged イベントでボイスをロード
if (synth.onvoiceschanged !== undefined) {
    synth.onvoiceschanged = populateVoiceList;
} else {
    // 互換性のために、直接呼び出す（一部のブラウザではイベントがない場合がある）
    populateVoiceList();
}


// --- 関数定義 ---

// 配列をシャッフルする関数（Fisher-Yatesシャッフルアルゴリズム）
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // 要素を交換
    }
    return array;
}

// フラッシュカードを表示する関数
function displayFlashcard() {
    // データがない場合やインデックスが範囲外の場合のガード
    if (!flashcardsShuffled || flashcardsShuffled.length === 0) {
        questionImage.src = ''; // 画像をクリア
        answerText.textContent = '問題データがありません。data.jsを確認してください。';
        answerText.classList.remove('hidden'); // hiddenを解除してメッセージを表示
        // playAudioBtn.disabled = true; // ボタンを無効化 -> 削除またはコメントアウト
        return;
    }

    const card = flashcardsShuffled[currentCardIndex];
    questionImage.src = card.questionImage;
    answerText.textContent = card.answerText;
    answerText.classList.add('hidden'); // 回答を非表示にする

    // 発音ボタン（もし残すなら）を有効化 -> showAnswerBtn に集約されたので不要
    // playAudioBtn.disabled = false;
}

// 答えを表示し、かつ読み上げる関数
function showAnswerAndSpeak() {
    answerText.classList.remove('hidden'); // hidden を解除して答えを表示

    // 答えが表示されたら、その内容を読み上げる
    const currentCardAnswer = flashcardsShuffled[currentCardIndex]?.answerText;
    if (currentCardAnswer) {
        speakText(currentCardAnswer);
    }
}

// Web Speech APIを使ってテキストを読み上げる関数
function speakText(text) {
    if (synth.speaking) {
        // すでに読み上げ中であれば停止
        synth.cancel();
    }
    
    const utterance = new SpeechSynthesisUtterance(text);

    const japaneseVoice = voices.find(voice => voice.lang === 'ja-JP' || voice.lang.startsWith('ja-'));
    if (japaneseVoice) {
        utterance.voice = japaneseVoice;
    } else {
        // 適切な英語ボイスが見つからない場合、デフォルトのボイスを使用
        console.warn("英語のボイスが見つかりませんでした。デフォルトのボイスを使用します。");
    }

    utterance.rate = 1.0; // 読み上げ速度（0.1から10.0、デフォルト1.0）
    utterance.pitch = 1.0; // ピッチ（0.0から2.0、デフォルト1.0）

    // 読み上げ開始
    synth.speak(utterance);
}

// 次のフラッシュカードに移動する関数
function nextFlashcard() {
    currentCardIndex++;
    if (currentCardIndex >= flashcardsShuffled.length) {
        // 全ての問題を出し終えたら、もう一度シャッフルして最初に戻る
        currentCardIndex = 0;
        flashcardsShuffled = shuffleArray([...flashcardsData]); // 元のデータをコピーして再シャッフル
    }
    displayFlashcard();
}

// --- イベントリスナー ---

// 「発音を聞く」ボタンのイベントリスナーは削除（showAnswerAndSpeakに統合）
// playAudioBtn.addEventListener('click', () => { ... });

// 「答えを見る」ボタンがクリックされたら、答えを表示して読み上げる
showAnswerBtn.addEventListener('click', showAnswerAndSpeak);

// 「次の問題」ボタンがクリックされたら
nextBtn.addEventListener('click', nextFlashcard);


// --- 初期表示 ---

// ページが読み込まれたら、まずデータをシャッフルし、最初のフラッシュカードを表示
if (flashcardsData && flashcardsData.length > 0) {
    flashcardsShuffled = shuffleArray([...flashcardsData]); // 元のデータをコピーしてシャッフル
    displayFlashcard();
} else {
    // データがない場合のメッセージ表示
    questionImage.src = '';
    answerText.textContent = '問題データがありません。data.jsを確認してください。';
    answerText.classList.remove('hidden'); // hiddenを解除してメッセージを表示
    // playAudioBtn.disabled = true; // データがなければボタンを無効化 -> 削除またはコメントアウト
}