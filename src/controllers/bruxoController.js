import * as BruxoModel from './../models/bruxoModel.js' 

export const listarTodos = async ( req, res) => {
    try {
        const bruxos = await BruxoModel.findAll();

        if ( !bruxos || bruxos.length === 0) {
            res.sttus(404).json({
                total: bruxos.length,
                mensagem: 'Não ha bruxos na Lista',
                bruxos
            })
        }

        res.status(200).json({
            total: bruxos.length,
            mensagem: 'Lista de bruxos',
            bruxos
        })

    } catch (error) {
        res.status(500).json({
            erro: 'Erro interno de servidor',
            detalhes: error.message,
            status: 500 
        })
    }
}