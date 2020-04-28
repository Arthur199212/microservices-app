export const SELECTED_PROJECT = 'selectedProject'

export class LocalStorageService {
  static getData (key: string) {
    const json = localStorage.getItem(key)

    if (!json) return null

    return JSON.parse(json)
  }

  static setData (key: string, data: any) {
    const json = JSON.stringify(data)

    localStorage.setItem(key, json)
  }
}
