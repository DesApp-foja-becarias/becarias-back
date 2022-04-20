export const sendEmail = (req, res) => {
  const mailjet = require('node-mailjet').connect(
    process.env.MJ_APIKEY_PUBLIC,
    process.env.MJ_APIKEY_PRIVATE
  );

  const { emails, subject, TextPart, HTMLPart } = req.body;

  const request = mailjet.post('send', { version: 'v3.1' }).request({
    Messages: [
      {
        From: {
          Email: 'unahur.cidia@gmail.com',
          Name: 'Becas Academicas',
        },
        To: [emails],
        Subject: subject,
        TextPart: TextPart,
        HTMLPart: HTMLPart,
      },
    ],
  });
  request
    .then((result) => {
      res.send(result.body);
      console.log(result.body);
    })
    .catch((err) => {
      console.log(err.statusCode);
    });
};

export const massiveEmail = async (req, res) => {
  const mailjet = require('node-mailjet').connect(
    process.env.MJ_APIKEY_PUBLIC,
    process.env.MJ_APIKEY_PRIVATE
  );

  // const promises = await Promise.all(req.body.data.map(element  => {
  //         const mailjet = require('node-mailjet')
  //         .connect(process.env.MJ_APIKEY_PUBLIC, process.env.MJ_APIKEY_PRIVATE)
  //         const { email, subject, TextPart, HTMLPart } = element;
  //         return mailjet
  //         .post("send", { 'version': 'v3.1' })
  //         .request({
  //             "Globals": {
  //                 "From": {
  //                     "Email": "rosa.alfonso1993@gmail.com",
  //                     "Name": "Becas Academicas"
  //                 },
  //                 "Subject": subject,
  //             },
  //             "Messages": [{
  //                 "To": [{email}],
  //                 "TextPart": TextPart,
  //                 "HTMLPart": HTMLPart

  //         }]
  //         })
  //         .then((result) =>  {
  //             return {
  //                 status: "ok",
  //                 result: result.body};
  //         })
  //         .catch((err) => console.log(err))
  //     }))
  // res.send(promises)
  const request = mailjet.post('send').request(() => {
    const { emails, subject, TextPart, HTMLPart } = req.body.emails;
    console.log(emails, subject, TextPart, HTMLPart, `\n \n`);

    return mailjet
      .post('send', { version: 'v3.1' })
      .request({
        Globals: {
          From: {
            Email: 'rosa.alfonso1993@gmail.com',
            Name: 'Becas Academicas',
          },
          Subject: subject,
        },
        Messages: [
          {
            To: emails,
            TextPart: TextPart,
            HTMLPart: HTMLPart,
          },
        ],

        //TODO:
        //PARA QUE ANDEN LAS IMAGENES SE DEBE USAR ESTO
        //TRADUCCION: QUILOMBO MASIVO
        // "InlinedAttachments": [
        //     {
        //         "ContentType": "image/png",
        //         "Filename": "logo.png",
        //         "ContentId": "logo",
      })
      .then((result) => {
        return {
          status: 'ok',
          result: result.body,
        };
      })
      .catch((err) => console.log(err));
  });
  res.send(request);
};
