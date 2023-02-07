/* c8 ignore start */
export async function sleep(ms: number) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

export function expectUnreachable(value: never): never {
	throw new Error(
		`Didn't expect to get here: got a value with case "${value}"`,
	);
}
/* c8 ignore end */