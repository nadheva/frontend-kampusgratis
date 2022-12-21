import React, { useEffect, useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from "draft-js";

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { createDiscussion, reset, resetAll } from "../../features/discussion-global/discussionGlobalSlice";
import { useNavigate } from "react-router-dom";

const styling = {
  border: '1px solid black'
};

const stylewrapper = {
  minWidth: '100%'
};

const Create = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState(() => EditorState.createEmpty());

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isSuccess, data, message } = useSelector(
    (state) => state.discussionGlobal
  );

  useEffect(() => {
    console.log(data)
    if (data?.discussion_new?.message === "sucess post discussion forum") {
      dispatch(resetAll());
      navigate(`/diskusi-global/diskusi/${data?.discussion_new?.data?.id}`);
      toast.info("Berhasil membuat diskusi baru. Halaman akan telah dialihkan.");
    }
  }, [data]);

  const doCreateDiscussion = async () => {
    if (content.length === 0 || title.length === 0) return toast.error("Judul atau Isi Diskusi masih kosong.");

    dispatch(createDiscussion({ title, content: content.getCurrentContent().getPlainText('\u0001') }));
  }

  return <>
    <div className="container my-5">
      <div className="col-6 mt-3">
        <label className="form-label">Judul Diskusi</label>
        <div className="input-group">
          <input type="text" className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
      </div>
      <div className="col-12 my-3 mb-5">
        <label className="form-label">Isi Diskusi</label>
        <div className="input-group" style={{ minHeight: '120px' }}>
          <Editor
            editorState={content}
            onEditorStateChange={setContent}
            wrapperClassName={stylewrapper}
            editorClassName={styling}
            toolbarClassName="toolbar-class"
          />
        </div>
      </div>
      <div className="d-sm-flex justify-content-end mt-5">
        <button className="btn btn-primary mt-5" onClick={doCreateDiscussion}>
          <i className="bi bi-send-plus-fill me-2"></i>
          Buat Diskusi</button>
      </div>
    </div>
  </>
}

export default Create;