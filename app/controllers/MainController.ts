export const getHelloWorld = ({request, response}: {request: any, response: any}) => {
    response.body = {
        satus: 200,
        data: {
            message: 'hello world'
        }
    }
}
