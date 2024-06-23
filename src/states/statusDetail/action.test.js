import { describe, expect, it, vitest } from "vitest";
import api from "../../utils/api";
import { asyncCreateComment, asyncReceiveStatusDetail } from "./action";

describe("thunkaction", () => {
    it("asyncReceiveStatusDetail", async() => {
        vitest.spyOn(api, "getStatusDetail").mockResolvedValue({});
        const dispatch = vitest.fn();
        await asyncReceiveStatusDetail(1)(dispatch);
        expect(api.getStatusDetail).toBeCalledWith(1);
    });

    it("asyncCreateComment", async() => {
        vitest.spyOn(api, "createComment").mockResolvedValue({});
        const dispatch = vitest.fn();
        await asyncCreateComment({ content: 1, threadId: 1 })(dispatch);
        expect(api.createComment).toHaveBeenCalledTimes(1);
    });
})