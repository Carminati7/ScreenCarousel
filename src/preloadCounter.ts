export class PreloadCounter {
    private static instance: PreloadCounter;
    private index: number;
    private constructor() {
      this.index = 0
    }

    /**
     * The static method that controls the access to the singleton instance.
     *
     * This implementation let you subclass the PreloadCounter class while keeping
     * just one instance of each subclass around.
     */
    public static getInstance(): PreloadCounter {
        if (!PreloadCounter.instance) {
            PreloadCounter.instance = new PreloadCounter();
        }

        return PreloadCounter.instance;
    }

    /**
     * Finally, any singleton should define some business logic, which can be
     * executed on its instance.
     */
    public getIndex() {
        return this.index++
    }
}
