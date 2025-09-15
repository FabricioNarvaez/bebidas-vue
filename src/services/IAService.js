import { openRouter } from "../lib/ia";
import { streamText } from "ai";

export default {
    async generarReceta(prompt) {
        const response = streamText({
            model: openRouter('meta-llama/llama-3.3-8b-instruct:free'),
            prompt
        });

        return response.textStream;
    }
}