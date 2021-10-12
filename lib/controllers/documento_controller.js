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
