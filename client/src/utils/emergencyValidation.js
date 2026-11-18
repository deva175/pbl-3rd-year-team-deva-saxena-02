export function validatePhone(phone) {
  if (!phone) return "Phone is required";
  if (!/^[6-9]\d{9}$/.test(phone)) return "Enter valid 10 digit number";
  return "";
}
export function validateName(name) {
  if (!name || name.trim().length < 3) return "Name must be at least 3 chars";
  return "";
}
export function validateLocation(loc) {
  if (!loc || loc.length < 3) return "Location is required";
  return "";
}
export function validateEmergencyForm(data) {
  const errors = {};
  const n = validateName(data.name);
  const p = validatePhone(data.phone);
  const l = validateLocation(data.location);
  if (n) errors.name = n;
  if (p) errors.phone = p;
  if (l) errors.location = l;
  return errors;
}
export function formatSOSMessage(data) {
  return `SOS - ${data.type} at ${data.location}. Name: ${data.name}, Phone: ${data.phone}`;
}
