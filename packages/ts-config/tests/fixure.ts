export function testBuild<T>(
	param?: T,
): [T | undefined] | T | number | Record<PropertyKey, T> {
	if (typeof param === "string") return param;
	if (typeof param === "number") return (param as number) + 5;
	if (param instanceof Object) return { key: param };
	return [param];
}
