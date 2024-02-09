import FormComponent from "@/components/FormComponent";
import React from "react";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import Link from "next/link";

export default function page() {
    return (
        <div className="w-[350px] justify-center items-center">
            <CardWithForm />
        </div>
    );
}

export function CardWithForm() {
    return (
        <div className="justify-center items-center ">
            <Card className="w-[400px] flex-col">
                <CardHeader>
                    <CardTitle className="items-center justify-center">
                        Signup
                    </CardTitle>
                    <CardDescription></CardDescription>
                </CardHeader>
                <CardContent>
                    <form>
                        <div className="grid w-full items-center gap-4">
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="name">Name</Label>
                                <Input id="name" placeholder="Name" />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" placeholder="Email" />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="password">Password</Label>
                                <Input id="password" placeholder="Password" />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="password">
                                    Confirm Password
                                </Label>
                                <Input
                                    id="password"
                                    placeholder="Confirm Password"
                                />
                            </div>
                        </div>
                    </form>
                </CardContent>
                <CardFooter className="flex-col justify-between items-center">
                    <Button className="w-[300px]">Submit</Button>
                    <div className="mt-2">
                        Already have an Account?{" "}
                        <Link href="/auth/login"><span className="border-b">Login</span></Link>{" "}
                    </div>
                </CardFooter>
            </Card>
        </div>
    );
}
