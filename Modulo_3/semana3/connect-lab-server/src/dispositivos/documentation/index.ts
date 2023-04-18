export const DispositivosDocumentation = {
    ApiOperation: {
        getDetails: {
            summary: 'Retorna os detalhes do dispositivo',
            description: 'Este endpoint retorna as informações de dispositivo.'
        },
        getAll: {
            summary: 'Retorna todos os dispositivo',
            description: 'Este endpoint retorna todos os dispositivo.'
        },
        addDevice: {
            summary: 'Retorna um dispositivo vinculado',
            description: 'Este endpoint recebe e vincula um dispositivo.'
        },
    },
    ApiProperty: {
        addDevice: {
            idDevice: {
                name: 'IdDevice',
                description: 'Id de dispositivos',
                example:1,
                type: Number,
                required: true,
            },
            local: {
                name: 'Local',
                description: 'Local que será vinculado ao dispositov',
                example: 'Sala',
                type: String,
                required: true,
            }
        }
    },
    ApiResponse: {
        getDetails: {
            Success: {
                status: 200,
                description:
                  'Informações encontradas com sucesso!',
                schema: {
                  example: {
                    code: 200,
                    message:
                      'Informações encontradas com sucesso!',
                  },
                },
            },
            NotFound: {
                status: 404,
                description:
                  'ID de dispositvo não encontrado nos registros.',
                schema: {
                  example: {
                    statusCode: 404,
                    message:
                      'ID de dispositvo não encontrado nos registros.',
                    error: 'Not Found',
                  },
                },
            },
        },
        getAll: {
            Success: {
                status: 200,
                description:
                  'Dispositivos encontrados!',
                schema: {
                  example: {
                    code: 200,
                    message:
                      'Dispositivos encontrados!!',
                  },
                },
            },
            NotFound: {
                status: 404,
                description:
                  'ID de dispositvo não encontrado nos registros.',
                schema: {
                  example: {
                    statusCode: 404,
                    message:
                      'ID de dispositvo não encontrado nos registros.',
                    error: 'Not Found',
                  },
                },
            },
        },
        addDevice: {
            Success: {
                status: 200,
                description:
                  'Dispositivo vinculado com sucesso!',
                schema: {
                  example: {
                    code: 200,
                    message:
                      'Dispositivo vinculado com sucesso!!',
                  },
                },
            },
            NotFound: {
                status: 404,
                description:
                  'ID de dispositvo não encontrado nos registros.',
                schema: {
                  example: {
                    statusCode: 404,
                    message:
                      'ID de dispositvo não encontrado nos registros.',
                    error: 'Not Found',
                  },
                },
            },
        },
    }
}