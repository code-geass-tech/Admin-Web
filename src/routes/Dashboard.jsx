import React, { useState } from "react";
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

const Dashboard = () => {

    const [dentist, setReports] = useState([
        {
            name: "Untitled at 02-02-2003",
            email: "test@gmail.com",
            phone_number: "1234567890"
        },
        {
            name: "Untitled at 02-02-2003",
            email: "test@gmail.com",
            phone_number: "1234567890"
        },
        {
            name: "Untitled at 02-02-2003",
            email: "test@gmail.com",
            phone_number: "1234567890"
        },
        {
            name: "Untitled at 02-02-2003",
            email: "test@gmail.com",
            phone_number: "1234567890"
        },
        {
            name: "Untitled at 02-02-2003",
            email: "test@gmail.com",
            phone_number: "1234567890"
        }
    ]);

    return (
        <div className="flex flex-row flex-wrap gap-8 mt-4">
            {dentist.map((dentist, index) => (
                <Card className="w-[350px]">
                    <CardHeader>
                        <CardTitle>{dentist.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        {dentist.email}
                        {dentist.phone_number}
                    </CardContent>
                    <CardFooter className="flex justify-between">
                        <Button variant="destructive">Remove</Button>
                    </CardFooter>
                </Card>
            ))}
        </div>
    )
}
export default Dashboard