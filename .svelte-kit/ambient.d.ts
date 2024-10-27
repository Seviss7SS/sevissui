
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const LESSOPEN: string;
	export const PYTHONIOENCODING: string;
	export const USER: string;
	export const npm_config_user_agent: string;
	export const SSH_AGENT_PID: string;
	export const GIT_ASKPASS: string;
	export const npm_package_devDependencies__sveltejs_vite_plugin_svelte: string;
	export const npm_package_devDependencies_vite: string;
	export const npm_node_execpath: string;
	export const SHLVL: string;
	export const LD_LIBRARY_PATH: string;
	export const npm_package_files_0: string;
	export const npm_package_devDependencies__storybook_addon_links: string;
	export const npm_config_noproxy: string;
	export const MOTD_SHOWN: string;
	export const HOME: string;
	export const ASDF_DIR: string;
	export const OLDPWD: string;
	export const TERM_PROGRAM_VERSION: string;
	export const NVM_BIN: string;
	export const VSCODE_IPC_HOOK_CLI: string;
	export const npm_package_json: string;
	export const PYENV_SHELL: string;
	export const PYTHONUNBUFFERED: string;
	export const NVM_INC: string;
	export const npm_package_devDependencies__sveltejs_adapter_static: string;
	export const VSCODE_GIT_ASKPASS_MAIN: string;
	export const npm_package_devDependencies_svelte_check: string;
	export const PS1: string;
	export const VSCODE_GIT_ASKPASS_NODE: string;
	export const npm_package_scripts_check: string;
	export const npm_config_userconfig: string;
	export const npm_config_local_prefix: string;
	export const DBUS_SESSION_BUS_ADDRESS: string;
	export const npm_package_exports___svelte: string;
	export const COLORTERM: string;
	export const WSL_DISTRO_NAME: string;
	export const npm_package_devDependencies_tailwindcss: string;
	export const npm_package_devDependencies_typescript: string;
	export const COLOR: string;
	export const NVM_DIR: string;
	export const npm_package_devDependencies__storybook_addon_styling_webpack: string;
	export const npm_package_devDependencies__storybook_svelte: string;
	export const npm_package_types: string;
	export const WAYLAND_DISPLAY: string;
	export const npm_package_scripts_dev: string;
	export const npm_package_sideEffects_0: string;
	export const npm_package_devDependencies_prettier: string;
	export const npm_package_devDependencies_sass_embedded: string;
	export const LOGNAME: string;
	export const npm_package_scripts_package_local: string;
	export const npm_package_type: string;
	export const NAME: string;
	export const WSL_INTEROP: string;
	export const PULSE_SERVER: string;
	export const _: string;
	export const npm_package_scripts_check_watch: string;
	export const npm_package_devDependencies_autoprefixer: string;
	export const npm_config_prefix: string;
	export const npm_config_npm_version: string;
	export const npm_package_scripts_lint: string;
	export const npm_config_registry: string;
	export const TERM: string;
	export const npm_package_devDependencies__storybook_addon_interactions: string;
	export const npm_package_devDependencies_publint: string;
	export const npm_config_cache: string;
	export const npm_package_peerDependencies_svelte: string;
	export const npm_package_devDependencies__chromatic_com_storybook: string;
	export const npm_config_node_gyp: string;
	export const PATH: string;
	export const npm_package_name: string;
	export const npm_package_scripts_package: string;
	export const NODE: string;
	export const XDG_RUNTIME_DIR: string;
	export const npm_package_devDependencies_storybook: string;
	export const npm_config_frozen_lockfile: string;
	export const DISPLAY: string;
	export const npm_package_devDependencies__storybook_addon_svelte_csf: string;
	export const LANG: string;
	export const npm_package_devDependencies__sveltejs_package: string;
	export const LS_COLORS: string;
	export const VSCODE_GIT_IPC_HANDLE: string;
	export const TERM_PROGRAM: string;
	export const npm_lifecycle_script: string;
	export const SSH_AUTH_SOCK: string;
	export const npm_package_devDependencies__sveltejs_kit: string;
	export const SHELL: string;
	export const npm_package_version: string;
	export const npm_lifecycle_event: string;
	export const NODE_PATH: string;
	export const npm_package_scripts_build: string;
	export const npm_package_devDependencies_svelte: string;
	export const LESSCLOSE: string;
	export const npm_package_scripts_prepublishOnly: string;
	export const npm_package_devDependencies__storybook_sveltekit: string;
	export const npm_package_svelte: string;
	export const npm_package_devDependencies__storybook_blocks: string;
	export const npm_package_dependencies_classnames: string;
	export const VIRTUAL_ENV: string;
	export const VSCODE_GIT_ASKPASS_EXTRA_ARGS: string;
	export const npm_package_scripts_format: string;
	export const npm_config_globalconfig: string;
	export const npm_config_init_module: string;
	export const PWD: string;
	export const npm_execpath: string;
	export const NVM_CD_FLAGS: string;
	export const PYENV_ROOT: string;
	export const XDG_DATA_DIRS: string;
	export const npm_package_exports___types: string;
	export const npm_config_global_prefix: string;
	export const npm_package_scripts_build_storybook: string;
	export const npm_package_devDependencies__sveltejs_adapter_auto: string;
	export const npm_package_devDependencies_postcss: string;
	export const npm_command: string;
	export const PNPM_SCRIPT_SRC_DIR: string;
	export const npm_package_scripts_preview: string;
	export const npm_package_scripts_storybook: string;
	export const npm_package_devDependencies__storybook_addon_essentials: string;
	export const npm_package_devDependencies__storybook_test: string;
	export const npm_package_devDependencies_prettier_plugin_svelte: string;
	export const WSL2_GUI_APPS_ENABLED: string;
	export const PNPM_HOME: string;
	export const HOSTTYPE: string;
	export const WSLENV: string;
	export const INIT_CWD: string;
	export const EDITOR: string;
}

/**
 * Similar to [`$env/static/private`](https://kit.svelte.dev/docs/modules#$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/main/packages/adapter-node) (or running [`vite preview`](https://kit.svelte.dev/docs/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * This module cannot be imported into client-side code.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		LESSOPEN: string;
		PYTHONIOENCODING: string;
		USER: string;
		npm_config_user_agent: string;
		SSH_AGENT_PID: string;
		GIT_ASKPASS: string;
		npm_package_devDependencies__sveltejs_vite_plugin_svelte: string;
		npm_package_devDependencies_vite: string;
		npm_node_execpath: string;
		SHLVL: string;
		LD_LIBRARY_PATH: string;
		npm_package_files_0: string;
		npm_package_devDependencies__storybook_addon_links: string;
		npm_config_noproxy: string;
		MOTD_SHOWN: string;
		HOME: string;
		ASDF_DIR: string;
		OLDPWD: string;
		TERM_PROGRAM_VERSION: string;
		NVM_BIN: string;
		VSCODE_IPC_HOOK_CLI: string;
		npm_package_json: string;
		PYENV_SHELL: string;
		PYTHONUNBUFFERED: string;
		NVM_INC: string;
		npm_package_devDependencies__sveltejs_adapter_static: string;
		VSCODE_GIT_ASKPASS_MAIN: string;
		npm_package_devDependencies_svelte_check: string;
		PS1: string;
		VSCODE_GIT_ASKPASS_NODE: string;
		npm_package_scripts_check: string;
		npm_config_userconfig: string;
		npm_config_local_prefix: string;
		DBUS_SESSION_BUS_ADDRESS: string;
		npm_package_exports___svelte: string;
		COLORTERM: string;
		WSL_DISTRO_NAME: string;
		npm_package_devDependencies_tailwindcss: string;
		npm_package_devDependencies_typescript: string;
		COLOR: string;
		NVM_DIR: string;
		npm_package_devDependencies__storybook_addon_styling_webpack: string;
		npm_package_devDependencies__storybook_svelte: string;
		npm_package_types: string;
		WAYLAND_DISPLAY: string;
		npm_package_scripts_dev: string;
		npm_package_sideEffects_0: string;
		npm_package_devDependencies_prettier: string;
		npm_package_devDependencies_sass_embedded: string;
		LOGNAME: string;
		npm_package_scripts_package_local: string;
		npm_package_type: string;
		NAME: string;
		WSL_INTEROP: string;
		PULSE_SERVER: string;
		_: string;
		npm_package_scripts_check_watch: string;
		npm_package_devDependencies_autoprefixer: string;
		npm_config_prefix: string;
		npm_config_npm_version: string;
		npm_package_scripts_lint: string;
		npm_config_registry: string;
		TERM: string;
		npm_package_devDependencies__storybook_addon_interactions: string;
		npm_package_devDependencies_publint: string;
		npm_config_cache: string;
		npm_package_peerDependencies_svelte: string;
		npm_package_devDependencies__chromatic_com_storybook: string;
		npm_config_node_gyp: string;
		PATH: string;
		npm_package_name: string;
		npm_package_scripts_package: string;
		NODE: string;
		XDG_RUNTIME_DIR: string;
		npm_package_devDependencies_storybook: string;
		npm_config_frozen_lockfile: string;
		DISPLAY: string;
		npm_package_devDependencies__storybook_addon_svelte_csf: string;
		LANG: string;
		npm_package_devDependencies__sveltejs_package: string;
		LS_COLORS: string;
		VSCODE_GIT_IPC_HANDLE: string;
		TERM_PROGRAM: string;
		npm_lifecycle_script: string;
		SSH_AUTH_SOCK: string;
		npm_package_devDependencies__sveltejs_kit: string;
		SHELL: string;
		npm_package_version: string;
		npm_lifecycle_event: string;
		NODE_PATH: string;
		npm_package_scripts_build: string;
		npm_package_devDependencies_svelte: string;
		LESSCLOSE: string;
		npm_package_scripts_prepublishOnly: string;
		npm_package_devDependencies__storybook_sveltekit: string;
		npm_package_svelte: string;
		npm_package_devDependencies__storybook_blocks: string;
		npm_package_dependencies_classnames: string;
		VIRTUAL_ENV: string;
		VSCODE_GIT_ASKPASS_EXTRA_ARGS: string;
		npm_package_scripts_format: string;
		npm_config_globalconfig: string;
		npm_config_init_module: string;
		PWD: string;
		npm_execpath: string;
		NVM_CD_FLAGS: string;
		PYENV_ROOT: string;
		XDG_DATA_DIRS: string;
		npm_package_exports___types: string;
		npm_config_global_prefix: string;
		npm_package_scripts_build_storybook: string;
		npm_package_devDependencies__sveltejs_adapter_auto: string;
		npm_package_devDependencies_postcss: string;
		npm_command: string;
		PNPM_SCRIPT_SRC_DIR: string;
		npm_package_scripts_preview: string;
		npm_package_scripts_storybook: string;
		npm_package_devDependencies__storybook_addon_essentials: string;
		npm_package_devDependencies__storybook_test: string;
		npm_package_devDependencies_prettier_plugin_svelte: string;
		WSL2_GUI_APPS_ENABLED: string;
		PNPM_HOME: string;
		HOSTTYPE: string;
		WSLENV: string;
		INIT_CWD: string;
		EDITOR: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
