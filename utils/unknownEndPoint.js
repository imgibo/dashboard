export default function unknownEndPoint(_, res) {
    return res.status(404).send({error: "unknown endpoint"});
}