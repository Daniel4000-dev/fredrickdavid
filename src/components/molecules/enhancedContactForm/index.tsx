"use client"

import type React from "react"
import { Button } from "@/components/atoms/button"
import { cn } from "@/lib/utils"
import { useState } from "react"
import { motion } from "framer-motion"

interface EnhancedContactFormProps {
  className?: string
}

export function EnhancedContactForm({ className }: EnhancedContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setFormData({ name: "", email: "", phone: "", message: "" })
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      className={cn("max-w-2xl mx-auto", className)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="space-y-8">
        <div className="relative">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="ENTER YOUR NAME*"
            required
            className="w-full bg-transparent border-0 border-b-2 border-black pb-2 text-gray-700 placeholder-gray-500 focus:outline-none focus:border-gray-700 transition-colors duration-300"
          />
        </div>

        <div className="relative">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="ENTER YOUR EMAIL*"
            required
            className="w-full bg-transparent border-0 border-b-2 border-black pb-2 text-gray-700 placeholder-gray-500 focus:outline-none focus:border-gray-700 transition-colors duration-300"
          />
        </div>

        <div className="relative">
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="PHONE NUMBER"
            className="w-full bg-transparent border-0 border-b-2 border-black pb-2 text-gray-700 placeholder-gray-500 focus:outline-none focus:border-gray-700 transition-colors duration-300"
          />
        </div>

        <div className="relative">
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="YOUR MESSAGE*"
            required
            rows={6}
            className="w-full bg-transparent border-0 border-b-2 border-black pb-2 text-gray-700 placeholder-gray-500 focus:outline-none focus:border-gray-700 transition-colors duration-300 resize-none"
          />
        </div>

        <div className="text-center pt-8">
          <Button type="submit" className="px-12 py-3">
            Submit
          </Button>
        </div>
      </div>
    </motion.form>
  )
}
