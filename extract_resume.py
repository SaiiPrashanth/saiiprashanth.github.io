from pypdf import PdfReader
import json

# Read the PDF
reader = PdfReader("static/pdf/resume.pdf")

# Extract text from all pages
text = ""
for page in reader.pages:
    text += page.extract_text() + "\n"

# Print the extracted text
print(text)

# Save to a file for easier viewing
with open("resume_content.txt", "w", encoding="utf-8") as f:
    f.write(text)

print("\n\nResume content saved to resume_content.txt")
