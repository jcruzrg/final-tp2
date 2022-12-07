class StorageFactory {

  constructor(type) {
    this.type = type;
  }

  storage() {
    if (this.type === "memory") {
      // Initialize memory db
      return [];
    } else {
      throw new Error(`No existe implementacion del tipo "${this.type} storage`);
    }
  }
}

module.exports = {
  StorageFactory
};
