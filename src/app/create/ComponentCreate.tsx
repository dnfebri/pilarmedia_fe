"use client";
import React, { ChangeEvent, FormEvent, useState } from "react";
import CreatableSelect from "react-select/creatable";
import { ICreatePostPayloadProps, useCreateQuery } from "./useCreateQuery";
import { TInputForm } from "@/types/inputForm";
import { useLayout } from "@/hooks/layout";

interface ICreatableSelect {
  label: string;
  value: string;
}

export const ComponentCreate = () => {
  const { setToast } = useLayout();
  const { createPost, isLoading } = useCreateQuery();
  const [isInput, setIsInput] = useState<TInputForm>({});
  const [isTags, setIsTags] = useState<ICreatableSelect[]>([]);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setIsInput((values) => ({ ...values, [name]: value }));
  };

  const submitForm = async (e: FormEvent) => {
    e.preventDefault();
    if (!isInput.title || !isInput.content) {
      return setToast({
        massage: "Please enter Title and Content",
        error: true,
      });
    }
    if (isTags.length === 0) {
      return setToast({
        massage: "Please enter Tags",
        error: true,
      });
    }
    const payload = {
      ...isInput,
      tags: isTags.map((item) => item.value),
    };
    await createPost(payload as ICreatePostPayloadProps);
  };

  return (
    <form onSubmit={submitForm}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="title">Title</label>
          <input
            id="title"
            type="text"
            placeholder="Enter Title"
            className="form-input"
            name="title"
            value={isInput.title || ""}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 mt-4">
        <div className="mb-5">
          <label htmlFor="content">Content</label>
          <textarea
            id="content"
            rows={3}
            className="form-textarea min-h-[130px] resize-none"
            placeholder="Enter Description"
            value={isInput.content}
            name="content"
            onChange={(e) => handleChange(e)}
          ></textarea>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 mt-4">
        <div className="mb-5">
          <label>Tags</label>
          <CreatableSelect
            isMulti
            onChange={(e) => setIsTags(e as ICreatableSelect[])}
          />
        </div>
      </div>
      <button
        type="submit"
        className={
          "btn btn-primary !mt-6" + (isLoading ? " btn-primary/50" : "")
        }
        disabled={isLoading}
      >
        {isLoading ? "Prosess..." : "Save"}
      </button>
    </form>
  );
};
