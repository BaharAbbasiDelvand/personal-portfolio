import React, { useState, useRef } from "react";
import { Button } from "../../Base/Button";
import { Card } from "../../Base/Card";
import { Textarea } from "../../Base/TextArea";
import { Input } from "../../Base/Input";
import { X } from "@mui/icons-material";
import { Icon } from "@mui/material";


interface AboutMeAppProps {
    isOpen: boolean;
    onClose: () => void;
}

export const AboutMeApp: React.FC<AboutMeAppProps> = ({
    isOpen,
    onClose,
}) => {
    const [text, setText] = useState(
        "I'm a Computer Science graduate from McMaster University with a minor in Art History..."
    );
    const [title, setTitle] = useState("About Me");
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => setSelectedImage(e.target?.result as string);
            reader.readAsDataURL(file);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-background border border-border rounded-lg shadow-2xl w-[800px] h-[600px] flex flex-col overflow-hidden">
                <div className="flex items-center justify-between px-4 py-3 bg-card border-b border-border">
                    <div className="flex items-center gap-2">
                        <button
                            onClick={onClose}
                            className="w-3 h-3 rounded-full bg-red-500"
                        />
                        <button className="w-3 h-3 rounded-full bg-yellow-500" />
                        <button className="w-3 h-3 rounded-full bg-green-500" />
                    </div>
                    <div className="flex-1 text-center">
                        <Input
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="text-center border-none bg-transparent text-sm font-medium max-w-xs mx-auto"
                        />
                    </div>
                    <div className="w-16" />
                </div>

                {/* Main Content */}
                <div className="flex-1 flex">
                    <div className="flex-1 p-4">
                        <Textarea
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            placeholder="Your About Me text..."
                            className="flex-1 resize-none border-border bg-background text-foreground"
                        />
                    </div>

                    <div className="w-px bg-border" />

                    <div className="w-80 p-4">
                        <Card className="flex-1 border-2 border-dashed border-border bg-muted/20 flex items-center justify-center">
                            {selectedImage ? (
                                <div className="relative w-full h-full">
                                    <img
                                        src={selectedImage}
                                        alt="About Me"
                                        className="w-full h-full object-contain rounded"
                                    />
                                    <Button
                                        variant="destructive"
                                        size="sm"
                                        className="absolute top-2 right-2"
                                        onClick={() => setSelectedImage(null)}
                                    >
                                        <X className="w-3 h-3" />
                                    </Button>
                                </div>
                            ) : (
                                <div
                                    className="text-center cursor-pointer p-8"
                                    onClick={() =>
                                        fileInputRef.current?.click()
                                    }
                                >
                                    <Icon className="w-12 h-12 text-muted-foreground mx-auto mb-2" />
                                    <p className="text-sm text-muted-foreground mb-1">
                                        Drop an image here
                                    </p>
                                    <p className="text-xs text-muted-foreground">
                                        or click to browse
                                    </p>
                                </div>
                            )}
                        </Card>
                        <input
                            ref={fileInputRef}
                            type="file"
                            accept="image/*"
                            onChange={handleImageUpload}
                            className="hidden"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
