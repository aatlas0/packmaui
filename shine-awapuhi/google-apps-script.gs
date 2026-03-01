/**
 * Google Apps Script for Coconut Milk Glow Orders
 * 
 * Instructions:
 * 1. Open your Google Sheet.
 * 2. Go to Extensions > App Script.
 * 3. Delete any code in the editor and paste this code.
 * 4. Click Save and name the project (e.g., "Coconut Milk Glow Orders").
 * 5. Click "Deploy" > "New Deployment".
 * 6. Select Type: "Web App".
 * 7. Description: "Order Submission API".
 * 8. Execute as: "Me" (your email).
 * 9. Who has access: "Anyone".
 * 10. Click Deploy, authorize permissions, and copy the "Web App URL".
 * 11. Paste that URL into your .env file as VITE_GOOGLE_SHEETS_URL.
 */

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.tryLock(10000); // Wait for up to 10 seconds for other processes to finish

  try {
    const doc = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = doc.getSheets()[0]; // Targets the first sheet
    
    // Parse the incoming JSON data
    const data = JSON.parse(e.postData.contents);
    
    // Define headers if the sheet is empty
    if (sheet.getLastRow() === 0) {
      const headers = [
        "التاريخ", 
        "الاسم الكامل", 
        "الهاتف", 
        "المدينة", 
        "العنوان", 
        "الكمية", 
        "المنتج", 
        "المجموع (درهم)"
      ];
      sheet.appendRow(headers);
    }
    
    // Prepare the row data based on CheckoutPage.tsx fields
    const row = [
      data.date || new Date().toLocaleString('ar-MA'),
      data.fullName,
      data.phone,
      data.city,
      data.address,
      data.quantity,
      data.product,
      data.total
    ];
    
    // Append the order to the sheet
    sheet.appendRow(row);
    
    return ContentService.createTextOutput(JSON.stringify({ 'result': 'success' }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ 'result': 'error', 'error': error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}
