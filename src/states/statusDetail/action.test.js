/**
 * Skenario Pengujian:
 * 
 * asyncReceiveStatusDetail:
 * - Memastikan bahwa fungsi api.getStatusDetail dipanggil dengan parameter yang benar ketika fungsi asyncReceiveStatusDetail dijalankan.
 * 
 * asyncCreateComment:
 * - Memastikan bahwa fungsi api.createComment dipanggil satu kali ketika fungsi asyncCreateComment dijalankan dengan parameter yang sesuai.
 */

import { describe, expect, it, vitest } from "vitest";
import api from "../../utils/api";
import { asyncCreateComment, asyncReceiveStatusDetail } from "./action";

describe("asyncReceiveStatusDetail", () => {
    it("should call getStatusDetail with correct parameter", async () => {
        vitest.spyOn(api, "getStatusDetail").mockResolvedValue({});
        const dispatch = vitest.fn();
        await asyncReceiveStatusDetail(1)(dispatch);
        expect(api.getStatusDetail).toBeCalledWith(1);
    });
});

describe("asyncCreateComment", () => {
    it("should call createComment once", async () => {
        vitest.spyOn(api, "createComment").mockResolvedValue({});
        const dispatch = vitest.fn();
        await asyncCreateComment({ content: 1, threadId: 1 })(dispatch);
        expect(api.createComment).toHaveBeenCalledTimes(1);
    });
});
