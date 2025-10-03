"use client";

import React from "react";

export function PageBackgroundWrapper({ children }: { children: React.ReactNode }) {
    return (
        <>
            {/* Desktop / Tablet background */}
            <div className="min-h-screen relative hidden md:block">
                <div
                    className="fixed inset-0"
                    style={{
                        backgroundImage: "url(/bg.jpg)",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundAttachment: "fixed",
                    }}
                >
                    <div className="absolute inset-0 bg-black/40"></div>
                </div>

                <div className="relative z-10">{children}</div>
            </div>

            {/* Mobile Background */}
            <div className="min-h-screen relative md:hidden bg-black">
                <div className="relative z-10">{children}</div>
            </div>
        </>
    );
}
