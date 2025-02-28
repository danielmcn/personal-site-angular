export class Technology {
    constructor(
        public name: string, 
        // Putting these in but as undefined to allow for future details
        // For now we just care about the names
        public description: string | undefined, 
        public logo: string | undefined) {}
}