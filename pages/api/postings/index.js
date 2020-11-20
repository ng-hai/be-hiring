import fetch from 'isomorphic-unfetch'
import loadEnv from 'dotenv'

loadEnv.config()

/**
 *
 *
 * @export
 * @param {NextApiRequest} req
 * @param {NextApiResponse} res
 * @returns
 */
export default (req, res) => {
  fetch(`${process.env.LEVER_API}?mode=json`)
    .then(response => response.json())
    .then(data => res.status(200).json(data))
    .catch(error => res.status(500).json(error))
}
