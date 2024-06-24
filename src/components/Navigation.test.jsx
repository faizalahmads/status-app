/**
 * Skenario Pengujian:
 * 
 * Navigation:
 * - Memastikan komponen Navigation dirender dengan benar ketika diberikan properti userAuth dan signOut yang sesuai.
 */

import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { MemoryRouter } from "react-router-dom";
import Navigation from "./Navigation";

describe("Navigation", () => {
    it("should render correctly", () => {
        const component = render(
            <MemoryRouter>
                <Navigation 
                    userAuth={{ id: '1', name: "Test User", avatar: "https://example.com/avatar.png" }} 
                    signOut={() => {}} 
                />
            </MemoryRouter>
        );
        expect(component).toBeTruthy();
    });
});
