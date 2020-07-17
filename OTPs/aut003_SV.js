module.exports = {
    // TOKEN DEL EMU
    // token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE1NjU5MDYwMTEsImV4cCI6MTU5NzQ0MjAxMSwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsImNsaWVuZHRJRCI6IjAxMjM0NTY3ODkiLCJwYXJ0bmVyIjoiTUwiLCJwcm9kdWN0IjoiQ0FNIiwibGVuZ3VhamUiOiJlcy1DUiIsImNhbmFsIjoid2ViIiwicGFpcyI6IkNSIiwibW9kdWxvIjoicXVlPz8_In0.2UplU6K0DBOTsikhlNbNq2IcgvkkoIIG4GEXym1ovKE',

    // TOKEN DE PRESENTACION CLIENTE
    token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE1MTU0NzAwNzYsImV4cCI6MTU0NjkxOTY3NiwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsIkdpdmVuTmFtZSI6IkpvaG5ueSIsIlN1cm5hbWUiOiJSb2NrZXQiLCJFbWFpbCI6Impyb2NrZXRAZXhhbXBsZS5jb20iLCJSb2xlIjpbIk1hbmFnZXIiLCJQcm9qZWN0IEFkbWluaXN0cmF0b3IiXX0._A7pY7lDS3-43R68XFLPUSspUVmyi9fleksPzLifcqI',
    workflow: {
        APPBOOT: 'ING001',
        ING001: 'CRE011',
        CRE011: 'ING001'
    },
    ING001: {
        status: 1,
        payload: {
            "aliado": "LM",
            "canal": "1",
            "idModulo": "CRECAM",
            "lenguaje": "ES",
            "pais": "SV",
            "zona": true
        }
    },
    CRE011: {
        status: 1,
        payload: {
            cuenta: {
                valCodigoProducto: 'HCL',
                valCodigoSubProducto: 'HCL002',
                valNumeroProducto: '0000012345',
                valAliasProducto: 'valAliasProducto',
            },
            esCliente: false,
            esFatca: true,
            SV: {
                CARTA_COMUNICACIONES_CRONOGRAMA_PAGOS: {
                    "cantidadCuotasMensuales": "12",
                    "cantidadTotalPagar": " 1,000.45",
                    "codCiudad": "14",
                    "codDepartamento": "6",
                    "codMunicipio": "",
                    "codPais": "SV",
                    "comisionDesembolso": "56.50",
                    "comisionMasIVA": "6.45",
                    "comisionSinIVA": "6.45",
                    "cuotaCapitalIntereses": " 90.45",
                    "cuotaDetalleSeguros": " 0.45",
                    "cuotaTotal": " 91.45",
                    "desembolso": "1000",
                    "destinoMontoAprobado": "GASTOS PERSONALES",
                    "fechaActual": "01 de abril de 2020",
                    "montoACobrarHasta": "2.50",
                    "montoOtorgadoMinimo": "225.45",
                    "nombres": {
                        "primerApellido": "MAGANA",
                        "primerNombre": "CRISTINA",
                        "segundoApellido": "CEA",
                        "segundoNombre": "DEL CARMEN"
                    },
                    "numCuotaTotal": "12",
                    "numeroCuentaFormaRetiro": "",
                    "numRemanenteAbonar": "943.50",
                    "numSeguros": "0.60",
                    "numSumaCapital": " 1.45",
                    "numSumaCuotas": "1,099.28",
                    "numSumaIntereses": " 92.45",
                    "numSumaSeguros": " 7.45",
                    "plazo": 12,
                    "plazoCuotasMensuales": "",
                    "referenciaDeCredito": "",
                    "tablaAmortizacion": [{
                        "numCuota": "1",
                        "fecFechaPago": "09/06/2021",
                        "valCapitalPago": "76.96",
                        "valInteresesPago": "14.01",
                        "valMontoSeguro": "0.60",
                        "valTotalCuota": "91.57"
                    }, {
                        "numCuota": "2",
                        "fecFechaPago": "09/07/2021",
                        "valCapitalPago": "78.45",
                        "valInteresesPago": "12.52",
                        "valMontoSeguro": "0.60",
                        "valTotalCuota": "91.57"
                    }, {
                        "numCuota": "3",
                        "fecFechaPago": "09/08/2021",
                        "valCapitalPago": "79.13",
                        "valInteresesPago": "11.84",
                        "valMontoSeguro": "0.60",
                        "valTotalCuota": "91.57"
                    }, {
                        "numCuota": "4",
                        "fecFechaPago": "09/09/2021",
                        "valCapitalPago": "80.24",
                        "valInteresesPago": "10.73",
                        "valMontoSeguro": "0.60",
                        "valTotalCuota": "91.57"
                    }, {
                        "numCuota": "5",
                        "fecFechaPago": "09/10/2021",
                        "valCapitalPago": "81.68",
                        "valInteresesPago": "9.29",
                        "valMontoSeguro": "0.60",
                        "valTotalCuota": "91.57"
                    }, {
                        "numCuota": "6",
                        "fecFechaPago": "09/11/2021",
                        "valCapitalPago": "82.51",
                        "valInteresesPago": "8.46",
                        "valMontoSeguro": "0.60",
                        "valTotalCuota": "91.57"
                    }, {
                        "numCuota": "7",
                        "fecFechaPago": "09/12/2021",
                        "valCapitalPago": "83.90",
                        "valInteresesPago": "7.07",
                        "valMontoSeguro": "0.60",
                        "valTotalCuota": "91.57"
                    }, {
                        "numCuota": "8",
                        "fecFechaPago": "09/01/2022",
                        "valCapitalPago": "84.84",
                        "valInteresesPago": "6.13",
                        "valMontoSeguro": "0.60",
                        "valTotalCuota": "91.57"
                    }, {
                        "numCuota": "9",
                        "fecFechaPago": "09/02/2022",
                        "valCapitalPago": "86.03",
                        "valInteresesPago": "4.94",
                        "valMontoSeguro": "0.60",
                        "valTotalCuota": "91.57"
                    }, {
                        "numCuota": "10",
                        "fecFechaPago": "09/03/2022",
                        "valCapitalPago": "87.60",
                        "valInteresesPago": "3.37",
                        "valMontoSeguro": "0.60",
                        "valTotalCuota": "91.57"
                    }, {
                        "numCuota": "11",
                        "fecFechaPago": "09/04/2022",
                        "valCapitalPago": "88.47",
                        "valInteresesPago": "2.50",
                        "valMontoSeguro": "0.60",
                        "valTotalCuota": "91.57"
                    }, {
                        "numCuota": "12",
                        "fecFechaPago": "09/05/2022",
                        "valCapitalPago": "90.19",
                        "valInteresesPago": "1.22",
                        "valMontoSeguro": "0.60",
                        "valTotalCuota": "92.01"
                    }],
                    "tasaInteresEfectivaAnual": " 31.57",
                    "tasaInteresEfectivaAnualTexto": "TREINTAPUNTO UN PUNTO CINCUENTA Y SIETE",
                    "tasaInteresesNominalMensual": "DIECISEIS PUNTO CINCUENTA",
                    "tasaInteresNominalAnual": "16.5",
                    "tasaInteresNominalAnualTexto": "DIECISEIS PUNTO CINCUENTA"
                },
                CLAUSULA_ESTIPULACIONES_JUDICIALES: {
                    codCiudad: 'xxx',
                    codMunicipio: 'xxx',
                    fechaActual: {
                        anioFechaActual: '2020',
                        aniocortoFechaActual: 'VEINTE',
                        diaFechaActual: 'Viernes',
                        fechaActual: '03-03-2020',
                        mesFechaActual: 'MARZO',
                    },
                    nombres: {
                        primerApellido: 'xxx',
                        primerNombre: 'xxx',
                        segundoApellido: 'xxx',
                        segundoNombre: 'xxx'
                    }
                },
                CONTRATO_DE_CREDITO_MOVIL: {
                    cantidadCuotasMensuales: 'xxx',
                    codCiudad: 'xxx',
                    comisionSinIVA: 'xxx',
                    comisionUSD: '$ 50.00',
                    cuotaTotalMensual: 'xxx',
                    desembolso: 'xxx',
                    destinoCredito: 'xxx',
                    codCiudad: '1',
                    codDepartamento: '1',
                    dui: 'xxx',
                    edadActualAnios: '125',
                    edadActualMeses: 'xxx',
                    fechaActual: {
                        anioFechaActual: '2020',
                        aniocortoFechaActual: 'VEINTE',
                        diaFechaActual: '05',
                        fechaActual: '03-03-2020',
                        mesFechaActual: 'Febrero',
                    },
                    finalidadPrestamo: 'xxx',
                    impuestoTransferenciaMueblesBienes: 'xxx',
                    interesSaldoMora: 'xxx',
                    ivaUSD: '$ 1,000.00',
                    montoACobrarHasta: 'xxx',
                    montoOtorgadoMinimo: 'xxx',
                    nombres: {
                        primerApellido: 'RAMON',
                        primerNombre: 'RAMON',
                        segundoApellido: 'RAMON',
                        segundoNombre: 'RAMON'
                    },
                    numeroCuenta: 'xxx',
                    pagarDiaMes: 'xxx',
                    pagoInteresesAbonoCapital: 'xxx',
                    pagoSeguroVida: 'xxx',
                    plazoSolicitado: 'xxx',
                    porcentajeTasaReferenciaMes: 'xxx',
                    profesion: 'ABOG',
                    tasaInteresEfectivaAnual: 'xxx',
                    tasaInteresEfectivaAnualTexto: 'xxx',
                    tasaInteresNominalAnual: 'xxx',
                    tasaInteresNominalAnualTexto: 'xxx',
                    tasaReferenciaMes: 'xxx',
                    valorSolicitado: '1000'
                },
                DECLARACION_DE_ASEGURABILIDAD: {
                    fecFechaInicioSeguro: '10-10-2020',
                    fecFechaFinSeguro: '10-02-2021',
                    codCiudad: 'SAN SALVADOR',
                    dui: 'xxx',
                    empresa: {
                        cargo: 'xxx',
                        direccion: 'Empresa tal',
                        fechaIngreso: 'xxx',
                        nombre: 'xxx'
                    },
                    nacimiento: {
                        codCiudad: 'SAN SALVADOR',
                        codEstado: 'xxx',
                        codMunicipio: 'xxx',
                        codPais: 'xxx',
                        edadActualAnios: 'xxx',
                        edadActualMeses: 'xxx',
                        fecha: 'xxx',
                        fechaActual: {
                            anioFechaActual: '2020',
                            aniocortoFechaActual: 'VEINTE',
                            diaFechaActual: '04',
                            fechaActual: '03-03-2020',
                            mesFechaActual: 'Febrero',
                        },
                        lugar: 'xxx',
                        nacionalidad: 'xxx',
                        otraNacionalidad: 'xxx'
                    },
                    nit: 'xxx',
                    nombres: {
                        primerApellido: 'xxx',
                        primerNombre: 'xxx',
                        segundoApellido: 'xxx',
                        segundoNombre: 'xxx'
                    },
                    plazoSolicitado: 'xxx',
                    telefonoResidencia: 'xxxx-xxxx',
                    tipoCredito: 'TIPO CREDITO',
                    valorSolicitado: '77021',
                    vigenciaPolizaAnio: {
                        anioFechaActual: '2020',
                        aniocortoFechaActual: 'VEINTE',
                        diaFechaActual: '12',
                        fechaActual: '03-03-2020',
                        mesFechaActual: 'marzo',
                    }
                },
                DECLARACION_JURADA: {
                    "codActividadEconomica": "0001",
                    "codOrigenPrincipal": '0003',
                    "montoAbono": "",
                    "montoAbonoEfectivo": "",
                    "montoRetiro": "",
                    "montoRetiroEfectivo": "",
                    "primerApellido": "MAGANA",
                    "primerNombre": "CRISTINA",
                    "segundoApellido": "CEA",
                    "segundoNombre": "DEL CARMEN"
                },
                LHC: {
                    dui: 'xxx',
                    nit: 'xxx',
                    nombres: {
                        primerApellido: 'xxx',
                        primerNombre: 'xxx',
                        segundoApellido: 'xxx',
                        segundoNombre: 'xxx'
                    },
                    tieneLhc: 'xxx'
                },
                SOLICITUD_CREDITO: {
                    cuotaMensual: 'xxx',
                    plazoSolicitado: 'xxx',
                    valorSolicitado: '1111'
                }
            }
        }
    }
};