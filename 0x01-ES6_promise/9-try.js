export default function guardrail(mathFunction) {
  const resps = [];
  try {
    resps.push(mathFunction());
} catch(e) {
    resps.push(e.message);
} finally {
    resps.push('Guardrail was processed');
    return resps;
}
}
