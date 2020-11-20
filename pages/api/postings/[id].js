import fetch from 'isomorphic-unfetch'
import formidable from 'formidable'
import FormData from 'form-data'
import fs from 'fs'

/**
 *
 *
 * @export
 * @param {NextApiRequest} req
 * @param {NextApiResponse} res
 */
export default (req, res) => {
  if (req.method === 'POST') {
    const form = new formidable.IncomingForm()
    form.parse(req, function(err, fields, files) {
      if (err) {
        res.end(err)
        return
      }

      const body = new FormData()

      Object.keys(fields).forEach(key => body.append(key, fields[key]))
      if (files.resume) {
        body.append('resume', fs.createReadStream(files.resume.path))
      }

      fetch(
        `${process.env.LEVER_API}/${req.query.id}?key=${process.env.API_KEY}`,
        {
          method: 'POST',
          body,
        }
      )
        .then(response => response.json())
        .then(data => res.status(200).json(data))
        .catch(error => res.status(500).json(error))

      return
    })

    return
  }

  fetch(`${process.env.LEVER_API}/${req.query.id}`)
    .then(response => response.json())
    .then(data => res.status(200).json(data))
    .catch(error => res.status(500).json(error))
}

export const config = {
  api: {
    bodyParser: false,
  },
}
