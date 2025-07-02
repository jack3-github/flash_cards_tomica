# generate_data_js.ps1

# Image base directory name
$image_base_dir = "images"
# Output data.js file name
$output_file = "data.js"

# Array to store flashcard data
$flashcards_data = @()

# Check if the specified base directory exists
if (-not (Test-Path $image_base_dir)) {
    Write-Host "Error: The specified image directory '$image_base_dir' was not found."
    exit 1
}

Write-Host "Searching for images in '$image_base_dir' directory..."

# Recursively search for all JPG and WEBP files under image_base_dir
# -Include パラメータに複数の拡張子を指定
Get-ChildItem -Path $image_base_dir -Recurse -Include *.jpg, *.webp | ForEach-Object {
    $file_path = $_.FullName
    $file_name = $_.Name
    
    # questionImage: Generate path like 'images/fruit/apple.jpg'
    # Convert full path to relative path from script execution location and unify slashes for web paths
    $question_image_path = $file_path.Replace((Get-Location).Path + "\", "").Replace("\", "/")

    # answerText: Remove extension from file name (e.g., apple.jpg -> apple)
    $answer_text = [System.IO.Path]::GetFileNameWithoutExtension($file_name)

    # Create a PowerShell hashtable (dictionary)
    $item = @{
        questionImage = $question_image_path;
        answerText    = $answer_text
    }
    $flashcards_data += $item
    Write-Host "  Added: $question_image_path -> $answer_text"
}

# Write to data.js file in the specified format
try {
    # Clear the file (if it exists) before writing
    Set-Content -Path $output_file -Encoding Utf8 -Value "" 

    Add-Content -Path $output_file -Encoding Utf8 -Value "const flashcardsData = ["

    for ($i = 0; $i -lt $flashcards_data.Count; $i++) {
        $item = $flashcards_data[$i]
        
        # Generate JSON formatted string
        $json_string = "`t{ `"questionImage`": `"$($item.questionImage)`", `"answerText`": `"$($item.answerText)`" }"
        
        # Add a comma for all but the last element
        if ($i -lt $flashcards_data.Count - 1) {
            $json_string += ","
        }
        Add-Content -Path $output_file -Encoding Utf8 -Value $json_string
    }

    Add-Content -Path $output_file -Encoding Utf8 -Value "];"
    Write-Host "`nSuccessfully generated '$output_file'. Number of cards: $($flashcards_data.Count)"
}
catch {
    Write-Host "Error: Failed to write to file '$output_file': $($_.Exception.Message)"
    exit 1
}