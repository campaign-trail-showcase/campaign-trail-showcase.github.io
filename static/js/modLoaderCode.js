
$(document).ready(function() {
    var originalOptions = null;

    $('.tagCheckbox').on('change', filterEntries);

    loadEntries();

    function loadEntries() {
        $.ajax({
            type: "GET",
            url: "../static/mods/MODLOADERFILE.html",
            dataType: "text",
            success: function(response) {
                $("#modSelect").html(response);

                // hot load
                let hotload = window.localStorage.getItem("hotload");
                if (hotload) {
                    try {
                        $("#modSelect")[0].value = hotload;
                        campaignTrail_temp.hotload = hotload;
                        $("#submitMod").click();
                    } catch {

                    }
                    window.localStorage.removeItem("hotload") // this should be done whether or not there is an error.
                }

                //clone so we don't reduce the list of mods every time a tag is selected
                originalOptions = $("#modSelect option").clone();
                filterEntries();
            },
            error: function() {
                console.log("Error loading mod loader - couldn't reach server.");
            }
        });
    }

    function filterEntries() {
        var selectedTags = [];

        // Get all selected tags
        $('.tagCheckbox:checked').each(function() {
            selectedTags.push($(this).val());
        });

        var filteredOptions = originalOptions.filter(function() {
            var entryTags = $(this).data('tags');

            if (selectedTags.length === 0) {
                // Show all if no tags are selected
                return true;
            }

            //return mods that are tagged and have all checked tags
            return entryTags && (containsAllTags(entryTags, selectedTags));
        });

        var $modSelect = $('#modSelect');
        $modSelect.empty().append(filteredOptions);

        $modSelect.val($modSelect.find('option:first').val());
    }

    function containsAllTags(entryTags, selectedTags) {
        var entryTagArray = entryTags.split(' ');

        for (var i = 0; i < selectedTags.length; i++) {
            if (!entryTagArray.includes(selectedTags[i])) {
                return false;
            }
        }

        return true;
    }
});