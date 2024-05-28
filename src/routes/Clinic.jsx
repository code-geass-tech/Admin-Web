import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { Button } from "@/components/ui/button"
import React, { useEffect, useState } from "react";

const Clinic = () => {
  const [users, setUsers] = useState([
    {
      name: "John Doe",
      clinic: "Clinic",
      contact: "John Doe",
      email: "johndoe@gmail.com",
      date_registered: "02-02-2003",
      role: "Admin",
      last_updated: "02-02-2003",
    },
    {
      name: "John Doe",
      clinic: "Clinic",
      contact: "John Doe",
      email: "johndoe@gmail.com",
      date_registered: "02-02-2003",
      role: "Admin",
      last_updated: "02-02-2003",
    },
    {
      name: "John Doe",
      clinic: "Clinic",
      contact: "John Doe",
      email: "johndoe@gmail.com",
      date_registered: "02-02-2003",
      role: "Admin",
      last_updated: "02-02-2003",
    },
    {
      name: "John Doe",
      clinic: "Clinic",
      contact: "John Doe",
      email: "johndoe@gmail.com",
      date_registered: "02-02-2003",
      role: "Admin",
      last_updated: "02-02-2003",
    }
  ]);

  const handleRoleChange = (index, role) => {
    const updatedUsers = users.map((user, i) =>
      i === index ? { ...user, role } : user
    );
    setUsers(updatedUsers);
  };

  return (
    <div className="d-flex">
      <Table>
        <TableCaption>Lorem ipsum dolor sit amet, consectetur adipiscing elit</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[200px]">Name</TableHead>
            <TableHead>Contact</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Clinic</TableHead>
            <TableHead>Date Registered</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Last Updated</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="bg-white text-black dark:bg-zinc-950 dark:text-zinc-50">
          {users.map((user, index) => (
            <TableRow>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.contact}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.clinic}</TableCell>
              <TableCell>{user.date_registered}</TableCell>
              <TableCell>
              <DropdownMenu>
                  <DropdownMenuTrigger>
                    <button className=" rounded">
                      {user.role}
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem onSelect={() => handleRoleChange(index, "Admin")}>
                      Admin
                    </DropdownMenuItem>
                    <DropdownMenuItem onSelect={() => handleRoleChange(index, "Owner")}>
                      Owner
                    </DropdownMenuItem>
                    <DropdownMenuItem onSelect={() => handleRoleChange(index, "Dentist")}>
                      Dentist
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
              <TableCell>{user.last_updated}</TableCell>
              <TableCell>
                <Button variant = "ghost"> Edit </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
export default Clinic