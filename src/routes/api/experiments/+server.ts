import { json } from '@sveltejs/kit';
import { ExperimentsService } from '$lib/services/experiments.js';
import { ApiResponse } from '$lib/utils/api-response';
import { ApiError } from '$lib/utils/api-error';

export const GET = async () => {
    try {
        const experimentsService = new ExperimentsService();
        const experiments = await experimentsService.getExperiments();
        return json({ experiments });
    } catch (err) {
        const response = new ApiResponse({ errors: ApiError.parse(err) });
        const message = response.errors?.[0].message || 'Uh oh, something went wrong.';
        return new Response(message, { status: response.statusCode });
    }
}
