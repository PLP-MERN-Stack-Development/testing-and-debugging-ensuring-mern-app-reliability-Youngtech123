function validateBugTitle(title) {
  if (!title || title.trim().length === 0) {
    return false;
  }
  if (title.length < 3) return false;
  return true;
}

module.exports = { validateBugTitle };
