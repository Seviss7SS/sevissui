
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
	export const PYENV_VIRTUALENV_INIT: string;
	export const USER: string;
	export const npm_config_user_agent: string;
	export const XDG_SESSION_TYPE: string;
	export const GIT_ASKPASS: string;
	export const npm_package_devDependencies__sveltejs_vite_plugin_svelte: string;
	export const npm_package_devDependencies_vite: string;
	export const npm_node_execpath: string;
	export const XCURSOR_SIZE: string;
	export const SHLVL: string;
	export const BROWSER: string;
	export const npm_package_files_0: string;
	export const XCURSOR_SIZE_LOW_DENSITY: string;
	export const SOMMELIER_VERSION: string;
	export const HOME: string;
	export const CHROME_DESKTOP: string;
	export const npm_package_files_1: string;
	export const TERM_PROGRAM_VERSION: string;
	export const NVM_BIN: string;
	export const npm_package_files_2: string;
	export const PYENV_SHELL: string;
	export const NVM_INC: string;
	export const VSCODE_GIT_ASKPASS_MAIN: string;
	export const npm_package_devDependencies_svelte_check: string;
	export const PS1: string;
	export const VSCODE_GIT_ASKPASS_NODE: string;
	export const MANAGERPID: string;
	export const npm_package_scripts_check: string;
	export const SYSTEMD_EXEC_PID: string;
	export const DBUS_SESSION_BUS_ADDRESS: string;
	export const npm_package_exports___svelte: string;
	export const COLORTERM: string;
	export const npm_package_devDependencies_tailwindcss: string;
	export const npm_package_devDependencies_typescript: string;
	export const NVM_DIR: string;
	export const npm_package_types: string;
	export const QT_QPA_PLATFORMTHEME: string;
	export const WAYLAND_DISPLAY: string;
	export const npm_package_scripts_dev: string;
	export const npm_package_sideEffects_0: string;
	export const npm_package_devDependencies_prettier: string;
	export const GTK_IM_MODULE: string;
	export const LOGNAME: string;
	export const WAYLAND_DISPLAY_LOW_DENSITY: string;
	export const SOMMELIER_DRM_DEVICE: string;
	export const npm_package_type: string;
	export const QT_AUTO_SCREEN_SCALE_FACTOR: string;
	export const JOURNAL_STREAM: string;
	export const _: string;
	export const npm_package_scripts_check_watch: string;
	export const npm_package_devDependencies_autoprefixer: string;
	export const NCURSES_NO_UTF8_ACS: string;
	export const npm_package_scripts_lint: string;
	export const npm_config_registry: string;
	export const TERM: string;
	export const npm_package_devDependencies_publint: string;
	export const npm_package_peerDependencies_svelte: string;
	export const PATH: string;
	export const INVOCATION_ID: string;
	export const PSQL_PASSWORD: string;
	export const npm_package_name: string;
	export const npm_package_scripts_package: string;
	export const NODE: string;
	export const XDG_RUNTIME_DIR: string;
	export const XCURSOR_THEME: string;
	export const GDK_BACKEND: string;
	export const npm_config_frozen_lockfile: string;
	export const SOMMELIER_GLAMOR: string;
	export const DISPLAY: string;
	export const LD_ARGV0_REL: string;
	export const DISPLAY_LOW_DENSITY: string;
	export const LANG: string;
	export const XDG_CURRENT_DESKTOP: string;
	export const VIRTUAL_ENV_PROMPT: string;
	export const PSQL_HOST: string;
	export const SOMMELIER_VM_IDENTIFIER: string;
	export const npm_package_devDependencies__sveltejs_package: string;
	export const XDG_CONFIG_HOME: string;
	export const LS_COLORS: string;
	export const PSQL_USER: string;
	export const VSCODE_GIT_IPC_HANDLE: string;
	export const TERM_PROGRAM: string;
	export const npm_lifecycle_script: string;
	export const ORIGINAL_XDG_CURRENT_DESKTOP: string;
	export const npm_package_devDependencies__sveltejs_kit: string;
	export const SHELL: string;
	export const npm_package_version: string;
	export const npm_lifecycle_event: string;
	export const NODE_PATH: string;
	export const QT_ACCESSIBILITY: string;
	export const NO_AT_BRIDGE: string;
	export const npm_package_scripts_build: string;
	export const npm_package_devDependencies_svelte: string;
	export const npm_package_scripts_prepublishOnly: string;
	export const npm_package_svelte: string;
	export const PSQL_PORT: string;
	export const VIRTUAL_ENV: string;
	export const VSCODE_GIT_ASKPASS_EXTRA_ARGS: string;
	export const npm_package_scripts_format: string;
	export const PWD: string;
	export const npm_execpath: string;
	export const NVM_CD_FLAGS: string;
	export const PYENV_ROOT: string;
	export const XDG_DATA_DIRS: string;
	export const npm_package_exports___types: string;
	export const PSQL_DB: string;
	export const npm_package_devDependencies__sveltejs_adapter_auto: string;
	export const npm_package_devDependencies_postcss: string;
	export const npm_command: string;
	export const PNPM_SCRIPT_SRC_DIR: string;
	export const npm_package_scripts_preview: string;
	export const npm_package_devDependencies_prettier_plugin_svelte: string;
	export const PNPM_HOME: string;
	export const INIT_CWD: string;
	export const NODE_ENV: string;
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
		PYENV_VIRTUALENV_INIT: string;
		USER: string;
		npm_config_user_agent: string;
		XDG_SESSION_TYPE: string;
		GIT_ASKPASS: string;
		npm_package_devDependencies__sveltejs_vite_plugin_svelte: string;
		npm_package_devDependencies_vite: string;
		npm_node_execpath: string;
		XCURSOR_SIZE: string;
		SHLVL: string;
		BROWSER: string;
		npm_package_files_0: string;
		XCURSOR_SIZE_LOW_DENSITY: string;
		SOMMELIER_VERSION: string;
		HOME: string;
		CHROME_DESKTOP: string;
		npm_package_files_1: string;
		TERM_PROGRAM_VERSION: string;
		NVM_BIN: string;
		npm_package_files_2: string;
		PYENV_SHELL: string;
		NVM_INC: string;
		VSCODE_GIT_ASKPASS_MAIN: string;
		npm_package_devDependencies_svelte_check: string;
		PS1: string;
		VSCODE_GIT_ASKPASS_NODE: string;
		MANAGERPID: string;
		npm_package_scripts_check: string;
		SYSTEMD_EXEC_PID: string;
		DBUS_SESSION_BUS_ADDRESS: string;
		npm_package_exports___svelte: string;
		COLORTERM: string;
		npm_package_devDependencies_tailwindcss: string;
		npm_package_devDependencies_typescript: string;
		NVM_DIR: string;
		npm_package_types: string;
		QT_QPA_PLATFORMTHEME: string;
		WAYLAND_DISPLAY: string;
		npm_package_scripts_dev: string;
		npm_package_sideEffects_0: string;
		npm_package_devDependencies_prettier: string;
		GTK_IM_MODULE: string;
		LOGNAME: string;
		WAYLAND_DISPLAY_LOW_DENSITY: string;
		SOMMELIER_DRM_DEVICE: string;
		npm_package_type: string;
		QT_AUTO_SCREEN_SCALE_FACTOR: string;
		JOURNAL_STREAM: string;
		_: string;
		npm_package_scripts_check_watch: string;
		npm_package_devDependencies_autoprefixer: string;
		NCURSES_NO_UTF8_ACS: string;
		npm_package_scripts_lint: string;
		npm_config_registry: string;
		TERM: string;
		npm_package_devDependencies_publint: string;
		npm_package_peerDependencies_svelte: string;
		PATH: string;
		INVOCATION_ID: string;
		PSQL_PASSWORD: string;
		npm_package_name: string;
		npm_package_scripts_package: string;
		NODE: string;
		XDG_RUNTIME_DIR: string;
		XCURSOR_THEME: string;
		GDK_BACKEND: string;
		npm_config_frozen_lockfile: string;
		SOMMELIER_GLAMOR: string;
		DISPLAY: string;
		LD_ARGV0_REL: string;
		DISPLAY_LOW_DENSITY: string;
		LANG: string;
		XDG_CURRENT_DESKTOP: string;
		VIRTUAL_ENV_PROMPT: string;
		PSQL_HOST: string;
		SOMMELIER_VM_IDENTIFIER: string;
		npm_package_devDependencies__sveltejs_package: string;
		XDG_CONFIG_HOME: string;
		LS_COLORS: string;
		PSQL_USER: string;
		VSCODE_GIT_IPC_HANDLE: string;
		TERM_PROGRAM: string;
		npm_lifecycle_script: string;
		ORIGINAL_XDG_CURRENT_DESKTOP: string;
		npm_package_devDependencies__sveltejs_kit: string;
		SHELL: string;
		npm_package_version: string;
		npm_lifecycle_event: string;
		NODE_PATH: string;
		QT_ACCESSIBILITY: string;
		NO_AT_BRIDGE: string;
		npm_package_scripts_build: string;
		npm_package_devDependencies_svelte: string;
		npm_package_scripts_prepublishOnly: string;
		npm_package_svelte: string;
		PSQL_PORT: string;
		VIRTUAL_ENV: string;
		VSCODE_GIT_ASKPASS_EXTRA_ARGS: string;
		npm_package_scripts_format: string;
		PWD: string;
		npm_execpath: string;
		NVM_CD_FLAGS: string;
		PYENV_ROOT: string;
		XDG_DATA_DIRS: string;
		npm_package_exports___types: string;
		PSQL_DB: string;
		npm_package_devDependencies__sveltejs_adapter_auto: string;
		npm_package_devDependencies_postcss: string;
		npm_command: string;
		PNPM_SCRIPT_SRC_DIR: string;
		npm_package_scripts_preview: string;
		npm_package_devDependencies_prettier_plugin_svelte: string;
		PNPM_HOME: string;
		INIT_CWD: string;
		NODE_ENV: string;
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
