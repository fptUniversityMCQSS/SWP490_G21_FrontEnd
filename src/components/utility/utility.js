export function convertToJSONArray(string) {
  let regex = /\}\n\{/g
  let newString = '[' + string.replaceAll(regex, '},{') + ']'
  return JSON.parse(newString)
}
