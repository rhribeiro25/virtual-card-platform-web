/**
 * Utility class for localStorage operations with typed support.
 */
export class LocalStorageUtil {

  /**
   * Saves a value in localStorage after converting it to JSON.
   * 
   * @param key - The key to identify the value.
   * @param value - The value to be stored (any serializable object).
   */
  static setItem<T>(key: string, value: T): void {
    try {
      const json = JSON.stringify(value);
      localStorage.setItem(key, json);
    } catch (error) {
      console.error(`❌ Failed to save item '${key}' to localStorage:`, error);
    }
  }

  /**
   * Retrieves and parses a value from localStorage.
   * 
   * @param key - The key of the stored value.
   * @returns The parsed object or null if not found or invalid.
   */
  static getItem<T>(key: string): T | null {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) as T : null;
    } catch (error) {
      console.error(`❌ Failed to parse item '${key}' from localStorage:`, error);
      return null;
    }
  }

  /**
   * Removes an item from localStorage by key.
   * 
   * @param key - The key to be removed.
   */
  static removeItem(key: string): void {
    localStorage.removeItem(key);
  }

  /**
   * Clears all items from localStorage.
   */
  static clear(): void {
    localStorage.clear();
  }
}
