import Documento from '../models/documento';

export const index = async (req, res) => {
  const documentos = await Documento.findAll({});
  res.json({ data: documentos.map((documento) => documento.toJSON()) });
};

export const show = async (req, res) => {
  const documento = await Documento.findByPk(req.params.id);
  if (documento) {
    res.json({ data: documento.toJSON() });
  } else {
    res
      .status(404)
      .json({ message: `No se encontró un documento con id ${req.params.id}` });
  }
};

export const add = async (req, res) => {
  const documentoData = req.body;
  const documento = Documento.build(documentoData);
  const dbResponse = await documento.save();
  res.json(dbResponse);
};

//put Documento
export const updateDocumento = async (req, res) => {
  const documento = await Documento.findByPk(req.params.id);
  if (documento) {
    documento
      .update(
        {
          documentation: req.body.documentation,
          BecariaId: req.body.BecariaId,
        },

        {
          where: {
            id: req.params.id,
          },
        }
      )
      .then(() =>
        res.json({
          message: `Documento actualizado`,
        })
      )
      .catch(() =>
        res.json({
          message: `Error al actualizar el documento`,
        })
      );
  } else {
    res.status(404).json({
      message: `No se encontró un documento con id ${req.params.id}`,
    });
  }
};

//delete Documento
export const deleteDocumento = async (req, res) => {
  const documento = await Documento.findByPk(req.params.id);
  if (documento) {
    documento
      .destroy({
        where: {
          id: req.params.id,
        },
      })
      .then(() =>
        res.json({
          message: `Documento eliminado`,
        })
      )
      .catch(() =>
        res.json({
          message: `Error al eliminar el documento`,
        })
      );
  } else {
    res.status(404).json({
      message: `No se encontró un documento con id ${req.params.id}`,
    });
  }
};
