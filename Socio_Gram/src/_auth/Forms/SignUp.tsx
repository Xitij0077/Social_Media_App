import { zodResolver } from "@hookform/resolvers/zod";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { SignUpValidation } from "@/lib/validation";
import { z } from "zod";

const SignUp = () => {
	// 1. Define your form.
	const form = useForm<z.infer<typeof SignUpValidation>>({
		resolver: zodResolver(SignUpValidation),
		defaultValues: {
			name: "",
			username: "",
			email: "",
			password: "",
		},
	});

	// 2. Define a submit handler.
	function onSubmit(values: z.infer<typeof SignUpValidation>) {
		// Do something with the form values.
		// ✅ This will be type-safe and validated.
		console.log(values);
	}

	const svgStyle = {
		width: "171px",
		height: "36px",
		// margin: "-5px", // Add margin
		// padding: "-5px", // Add padding
	};
	return (
		<Form {...form}>
			<div className="sm:w-420 flex-center flex-col">
				<img
					src="./assets/images/sociogram-high.svg"
					alt="logo"
					style={svgStyle}
				/>
			</div>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
				<FormField
					control={form.control}
					name="username"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Username</FormLabel>
							<FormControl>
								<Input placeholder="shadcn" {...field} />
							</FormControl>
							<FormDescription>
								This is your public display name.
							</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button type="submit">Submit</Button>
			</form>
		</Form>
	);
};

export default SignUp;
