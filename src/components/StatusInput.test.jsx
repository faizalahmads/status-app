/**
 * Skenario Pengujian:
 * 
 * StatusInput:
 * - Memastikan komponen StatusInput dirender dengan benar ketika diberikan properti addStatus yang sesuai.
 */

import { describe, expect, it } from "vitest";
import StatusInput from "./StatusInput";
import { render } from "@testing-library/react";

describe("StatusInput", () => {
    it("should render correctly", () => {
        const component = render(<StatusInput addStatus={() => {}} />);
        expect(component).toBeTruthy();
    });
})
