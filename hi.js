const fs = require('fs');
const path = require('path');

try {
    const pathName = path.join(__dirname, 'prj1.json');
    const Content = fs.readFileSync(pathName, 'utf8');
    const parsedContent = JSON.parse(Content);
    
    console.log('my street:\n \n', parsedContent.address.street);
    console.log('type of street:\n', typeof parsedContent.address.street);
    
    // console.log('my street:', typeof parsedContent.address.street);

} catch (err) {

    console.error('Failed to read info.json:', err.message);
}