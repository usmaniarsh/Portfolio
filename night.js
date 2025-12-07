


// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
  const downloadBtn = document.getElementById('downloadPdfResume');
  
  downloadBtn.addEventListener('click', function() {
    // Create a temporary anchor tag
    const link = document.createElement('a');
    link.href = 'assets/resume.pdf'; // Path to your PDF
    link.download = 'MyResume.pdf'; // Suggested filename
    link.target = '_blank'; // Open in new tab (optional)
    
    // Trigger the download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
});