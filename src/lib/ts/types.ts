export type FloatingService = {
	title: string;
	content: string;
	tools: ServiceTool[];
};

export type ServiceTool = {
	name: string;
	url: string;
};
