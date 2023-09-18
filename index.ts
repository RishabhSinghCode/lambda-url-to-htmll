import { APIGatewayProxyEventV2,APIGatewayProxyStructuredResultV2 } from "aws-lambda";
import { json } from "node:stream/consumers";

interface Input {
    url: string;
    name: string;
}
interface Output {
    title: string;
    s3_url: string;
}

export const handler = async (event: APIGatewayProxyEventV2): Promise<APIGatewayProxyStructuredResultV2> => {
    const body: Output = {
        title:'something something',
        s3_url:'will get later'
    };
    return {
        statusCode: 200,
        body:JSON.stringify(body)
    }
}