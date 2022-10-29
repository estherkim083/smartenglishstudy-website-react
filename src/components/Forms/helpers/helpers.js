export default function isMP3(file) {
  const fileName = file.name || file.path;
  const suffix = fileName.substr(fileName.indexOf('.') + 1).toLowerCase();
  if (suffix==="mp3") {
    return true;
  }
  return false;
}
