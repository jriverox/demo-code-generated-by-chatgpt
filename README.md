## Probar localmente
serverless invoke local --function getConsultant --path event-mock.json

## Desplegar en AWS
serverless invoke local --function getConsultant --path event-mock.json

## Probar el API ya desplegado
curl -X GET https://aynj2xmjod.execute-api.us-east-1.amazonaws.com/dev/consultoras/PE/12345-678
