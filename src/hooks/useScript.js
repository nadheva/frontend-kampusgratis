import { useState, useEffect } from "react";

let cachedScripts = [];

export function useScript(src) {
	const [state, setState] = useState({
		loaded: false,
		error: false
	});

	useEffect(() => {
		if (cachedScripts.includes(src)) {
			let script = document.getElementById('functions');

			script.remove();

			let new_script = document.createElement("script");
			new_script.setAttribute('id', 'functions');
			new_script.src = src;
			new_script.async = true;

			const onScriptLoad = () => {
				setState({
					loaded: true,
					error: false
				});
			};

			const onScriptError = () => {
				const index = cachedScripts.indexOf(src);
				if (index >= 0) cachedScripts.splice(index, 1);
				new_script.remove();

				setState({
					loaded: true,
					error: true
				});
			};

			new_script.addEventListener("load", onScriptLoad);
			new_script.addEventListener("error", onScriptError);

			document.body.appendChild(new_script);

			return () => {
				new_script.removeEventListener("load", onScriptLoad);
				new_script.removeEventListener("error", onScriptError);
			};
		} else {
			cachedScripts.push(src);

			let script = document.createElement("script");
			script.setAttribute('id', 'functions');
			script.src = src;
			script.async = true;

			const onScriptLoad = () => {
				setState({
					loaded: true,
					error: false
				});
			};

			const onScriptError = () => {
				const index = cachedScripts.indexOf(src);
				if (index >= 0) cachedScripts.splice(index, 1);
				script.remove();

				setState({
					loaded: true,
					error: true
				});
			};

			script.addEventListener("load", onScriptLoad);
			script.addEventListener("error", onScriptError);

			document.body.appendChild(script);

			return () => {
				script.removeEventListener("load", onScriptLoad);
				script.removeEventListener("error", onScriptError);
			};
		}
	}, [src]);

	return [state.loaded, state.error];
}