const consultants = require('./consultants.json');

exports.getConsultant = async (event) => {
    try {
        const { codpais, codebelista } = event.pathParameters;
        
        // Validación de los parámetros
        if (!codpais || !codebelista) {
            return { statusCode: 400, body: 'Bad request' };
        }
        // const url = "https://belc-hackathon2023.s3.amazonaws.com/consultants.json";
        // const response = await fetch(url);
        
        // const consultants = await response.json();
        
        // const data = await s3.getObject({ Bucket: BUCKET_NAME, Key: FILE_NAME }).promise();
        // const consultants = JSON.parse(data.Body.toString('utf-8'));

        const consultant = consultants.find(c => c.codpais === codpais && c.codebelista === codebelista);

        if (consultant) {
            return { statusCode: 200, body: JSON.stringify(consultant) };
        } else {
            return { statusCode: 404, body: 'Not Found' };
        }
    } catch (error) {
        console.error(error);
        return { statusCode: 500, body: 'Internal Server Error' };
    }
};
