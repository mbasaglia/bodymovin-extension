import actionTypes from './actionTypes'

function filterChange(event) {
	return {
		type: actionTypes.COMPOSITIONS_FILTER_CHANGE,
		value: event.target.value
	}
}

function toggleItem(comp) {
	return {
		type: actionTypes.COMPOSITIONS_TOGGLE_ITEM,
		id: comp.id
	}
}

function getCompositions() {
	return {
		type: actionTypes.COMPOSITIONS_GET_COMPS
	}
}

function setDestination(comp) {
	return {
		type: actionTypes.COMPOSITION_SET_DESTINATION,
		comp: comp
	}
}

function getDestination(comp) {
	return {
		type: actionTypes.COMPOSITION_GET_DESTINATION,
		comp: comp
	}
}

function displaySettings(id) {
	return {
		type: actionTypes.COMPOSITION_DISPLAY_SETTINGS,
		id: id
	}
}

function setCurrentCompId(id) {
	return {
		type: actionTypes.COMPOSITIONS_SET_CURRENT_COMP_ID,
		id: id
	}
}

function cancelSettings(storedSettings) {
	return {
		type: actionTypes.SETTINGS_CANCEL,
		storedSettings: storedSettings
	}
}

function toggleSettingsValue(name) {
	return {
		type: actionTypes.SETTINGS_TOGGLE_VALUE,
		name: name,
	}
}

function addMetadataCustomProp(name) {
	return {
		type: actionTypes.SETTINGS_METADATA_CUSTOM_PROP_ADD,
		name: name,
	}
}

function deleteMetadataCustomProp(id) {
	return {
		type: actionTypes.SETTINGS_METADATA_CUSTOM_PROP_DELETE,
		id,
	}
}

function metadataCustomPropTitleChange(value, id) {
	return {
		type: actionTypes.SETTINGS_METADATA_CUSTOM_PROP_TITLE_CHANGE,
		id,
		value,
	}
}

function metadataCustomPropValueChange(value, id) {
	return {
		type: actionTypes.SETTINGS_METADATA_CUSTOM_PROP_VALUE_CHANGE,
		id,
		value,
	}
}

function updateSettingsValue(name, value) {
	return {
		type: actionTypes.SETTINGS_UPDATE_VALUE,
		value: value,
		name: name
	}
}

function toggleExtraComp(id) {
	return {
		type: actionTypes.SETTINGS_TOGGLE_EXTRA_COMP,
		id: id,
	}
}

function goToPreview() {
	return {
		type: actionTypes.GOTO_PREVIEW,
	}
}

function goToPlayer() {
	return {
		type: actionTypes.GOTO_PLAYER,
	}
}

function goToComps() {
	return {
		type: actionTypes.GOTO_COMPS,
	}
}

function clearCache() {
	return {
		type: actionTypes.APP_CLEAR_CACHE,
	}
}

function clearCacheConfirmed() {
	return {
		type: actionTypes.APP_CLEAR_CACHE_CONFIRMED,
	}
}

function clearCacheCancelled() {
	return {
		type: actionTypes.APP_CLEAR_CACHE_CANCELLED,
	}
}

function clearProjectsFromCache(ids) {
	return {
		type: actionTypes.APP_CLEAR_CACHE_PROJECTS,
		ids: ids,
	}
}

function toggleShowSelected() {
	return {
		type: actionTypes.SETTINGS_TOGGLE_SELECTED,
	}
}

function rememberSettings() {
	return {
		type: actionTypes.SETTINGS_REMEMBER,
	}
}

function applySettings() {
	return {
		type: actionTypes.SETTINGS_APPLY,
		allComps: false
	}
}

function applySettingsToSelectedComps(settings) {
	return {
		type: actionTypes.SETTINGS_APPLY,
		settings,
		allComps: true
	}
}

function applySettingsFromCache(comp, allComps) {
	return {
		type: actionTypes.SETTINGS_APPLY_FROM_CACHE,
		comp,
		allComps
	}
}

function handleBannerWidthChange(value) {
	return {
		type: actionTypes.SETTINGS_BANNER_WIDTH_UPDATED,
		value,
	}
}

function handleBannerHeightChange(value) {
	return {
		type: actionTypes.SETTINGS_BANNER_HEIGHT_UPDATED,
		value,
	}
}

function handleBannerVersionChange(value) {
	return {
		type: actionTypes.SETTINGS_BANNER_VERSION_UPDATED,
		value,
	}
}

function handleBannerOriginChange(value) {
	return {
		type: actionTypes.SETTINGS_BANNER_ORIGIN_UPDATED,
		value,
	}
}

function handleBannerLibraryPathChange(value) {
	return {
		type: actionTypes.SETTINGS_BANNER_LIBRARY_PATH_UPDATED,
		value,
	}
}

function handleBannerLibraryFileChange(value) {
	return {
		type: actionTypes.SETTINGS_BANNER_LIBRARY_FILE_UPDATE,
		value,
	}
}

function handleModeToggle(value) {
	return {
		type: actionTypes.SETTINGS_MODE_TOGGLE,
		value,
	}
}

function lottieBannerRendererUpdated(value) {
	return {
		type: actionTypes.SETTINGS_BANNER_RENDERER_UPDATED,
		value,
	}
}

function lottieBannerClickTagUpdated(value) {
	return {
		type: actionTypes.SETTINGS_BANNER_CLICK_TAG_UPDATED,
		value,
	}
}

function lottieBannerZipFilesUpdated() {
	return {
		type: actionTypes.SETTINGS_BANNER_ZIP_FILES_UPDATED,
	}
}

function lottieBannerCustomSizeFlagUpdated() {
	return {
		type: actionTypes.SETTINGS_BANNER_CUSTOM_SIZE_UPDATED,
	}
}

function lottieIncludeDataInTemplateUpdated() {
	return {
		type: actionTypes.SETTINGS_BANNER_INCLUDE_DATA_IN_TEMPLATE_UPDATED,
	}
}

function lottieHandleLoopToggleChange() {
	return {
		type: actionTypes.SETTINGS_BANNER_LOOP_TOGGLE,
	}
}

function lottieHandleLoopCountChange(value) {
	return {
		type: actionTypes.SETTINGS_BANNER_LOOP_COUNT_CHANGE,
		value
	}
}

function goToImportFile() {
	return {
		type: actionTypes.GOTO_IMPORT,
	}
}

function toggleCompNameAsDefault() {
	return {
		type: actionTypes.SETTINGS_COMP_NAME_AS_DEFAULT_TOGGLE,
	}
}

function toggleCompNameAsFolder() {
	return {
		type: actionTypes.SETTINGS_INCLUDE_COMP_NAME_AS_FOLDER_TOGGLE,
	}
}

function toggleAEAsPath() {
	return {
		type: actionTypes.SETTINGS_AE_AS_PATH_TOGGLE,
	}
}

function toggleCopySettings() {
	return {
		type: actionTypes.SETTINGS_PROJECT_SETTINGS_COPY,
	}
}

function toggleDefaultPathAsFolder() {
	return {
		type: actionTypes.SETTINGS_PATH_AS_DEFAULT_FOLDER,
	}
}

function defaultFolderFileChange(value) {
	return {
		type: actionTypes.SETTINGS_DEFAULT_FOLDER_PATH_UPDATE,
		value,
	}
}

function settingsCopyPathChange(value) {
	return {
		type: actionTypes.SETTINGS_COPY_PATH_UPDATE,
		value,
	}
}

function settingsCopyPathPathSelected(value) {
	return {
		type: actionTypes.SETTINGS_COPY_PATH_SELECTED,
		value,
	}
}

function settingsBannerLibraryFileSelected(value) {
	return {
		type: actionTypes.SETTINGS_BANNER_LIBRARY_FILE_SELECTED,
		value,
	}
}

function settingsDefaultFolderPathSelected(value) {
	return {
		type: actionTypes.SETTINGS_DEFAULT_FOLDER_PATH_SELECTED,
		value,
	}
}

function goToAnnotations(value) {
	return {
		type: actionTypes.GOTO_ANNOTATIONS,
	}
}
function handleDemoBackgroundColorChange(value) {
	return {
		type: actionTypes.SETTINGS_DEMO_BACKGROUND_COLOR_CHANGE,
		value,
	}
}

function goToReports(path) {
	return {
		type: actionTypes.GOTO_REPORTS,
		path,
	}
}

function goToSupportedFeatures() {
	return {
		type: actionTypes.GOTO_SUPPORTED_FEATURES,
	}
}

function selectAllComps() {
	return {
		type: actionTypes.COMPOSITIONS_SELECT_ALL,
	}
}

function unselectAllComps() {
	return {
		type: actionTypes.COMPOSITIONS_UNSELECT_ALL,
	}
}

function loadSettings() {
	return {
		type: actionTypes.SETTINGS_LOAD,
	}
}

function settingsLoaded(projectData) {
	return {
		type: actionTypes.SETTINGS_LOADED,
		projectData,
	}
}

function toggleSaveInProjectFile() {
	return {
		type: actionTypes.SETTINGS_SAVE_IN_PROJECT_FILE,
	}
}

export {
	filterChange,
	toggleShowSelected,
	toggleItem,
	getCompositions,
	getDestination,
	setDestination,
	displaySettings,
	setCurrentCompId,
	cancelSettings,
	toggleSettingsValue,
	toggleExtraComp,
	updateSettingsValue,
	goToPreview,
	goToPlayer,
	goToComps,
	goToImportFile,
	rememberSettings,
	applySettings,
	applySettingsFromCache,
	applySettingsToSelectedComps,
	handleBannerWidthChange,
	handleBannerHeightChange,
	handleBannerVersionChange,
	handleModeToggle,
	handleBannerOriginChange,
	handleBannerLibraryPathChange,
	handleBannerLibraryFileChange,
	lottieBannerRendererUpdated,
	lottieBannerClickTagUpdated,
	lottieBannerZipFilesUpdated,
	lottieBannerCustomSizeFlagUpdated,
	lottieIncludeDataInTemplateUpdated,
	lottieHandleLoopToggleChange,
	lottieHandleLoopCountChange,
	toggleCompNameAsDefault,
	toggleCompNameAsFolder,
	toggleAEAsPath,
	toggleDefaultPathAsFolder,
	settingsDefaultFolderPathSelected,
	defaultFolderFileChange,
	settingsBannerLibraryFileSelected,
	goToAnnotations,
	goToReports,
	handleDemoBackgroundColorChange,
	addMetadataCustomProp,
	deleteMetadataCustomProp,
	metadataCustomPropTitleChange,
	metadataCustomPropValueChange,
	selectAllComps,
	unselectAllComps,
	clearCache,
	clearCacheConfirmed,
	clearCacheCancelled,
	toggleCopySettings,
	settingsCopyPathChange,
	settingsCopyPathPathSelected,
	loadSettings,
	settingsLoaded,
	toggleSaveInProjectFile,
	clearProjectsFromCache,
	goToSupportedFeatures,
}