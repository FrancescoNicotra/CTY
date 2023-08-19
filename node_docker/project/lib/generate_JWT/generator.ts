const jwt = require("jsonwebtoken");

const JWT_SECRET = process.env.JWT_SECRET;

export function GenerateJwtToken(payload: any) {
  // Opzioni per la creazione del token (puoi personalizzarle secondo le tue esigenze)
  const options = {
    expiresIn: "1 days", // Scadenza del token (1 giorno)
  };

  // Genera il token con la firma utilizzando la chiave segreta
  const token = jwt.sign(payload, JWT_SECRET, options);
  return token;
}

export function verifyJwtToken(token?: string) {
  try {
    const decodedToken = jwt.verify(token, JWT_SECRET);
    return decodedToken; // Restituisce il payload del token se è valido
  } catch (error: any) {
    // Se la verifica fallisce, potresti gestire l'errore qui
    console.error("Errore durante la verifica del token:", error.message);
    return null;
  }
}
